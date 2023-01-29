import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Start from '@/components/Start/Start';
import Tracks from '@material-ui/icons/Subject';

const mockPush = jest.fn();

jest.mock('next/router', () => {
	return {
		useRouter: jest.fn().mockImplementation(() => {
			return {
				push: mockPush,
				route: '',
				pathname: '',
				query: '',
				asPath: ''
			};
		})
	};
});

describe('Start component tests', () => {
	beforeEach(() => {
		render(<Start />);
	});

	afterEach(() => {
		cleanup();
	});

	it('Image presents in DOM', () => {
		const img = screen.getByRole('img');
		expect(img).toBeInTheDocument();
	});

	it('IconButton presents in DOM', () => {
		const iconButton = screen.getByTestId('icon-button');
		expect(iconButton).toBeInTheDocument();
	});

	it('IconButton redirects to tracks list when clicked', async () => {
		const iconButton = screen.getByTestId('icon-button');
		await userEvent.click(iconButton);
		expect(mockPush).toHaveBeenCalledTimes(1);
	});

	it('Push tracklist URL to router if it exist', () => {
		expect(mockPush).toHaveBeenCalledWith('/tracks');
	});
});
