import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Index from '@/pages/index';

jest.mock('@/layouts/main/Main.layout', () => 'mainlayout');
jest.mock('@/components/Start/Start', () => 'start');

describe('Entire application tests', () => {
	beforeEach(() => {
		render(<Index />);
	});

	it('Root App main element renders', () => {
		const main = screen.getByRole('main');
		expect(main).toBeInTheDocument();
	});
});
