import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { SvgIconComponent } from '@material-ui/icons';

export default interface INavbarItem {
	text: string;
	href: string;
	icon: OverridableComponent<SvgIconTypeMap>;
}
