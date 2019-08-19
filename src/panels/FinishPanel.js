import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, HeaderButton, platform, IOS} from '@vkontakte/vkui';
import './PeticSignature.css';
import Logo from "../content/Logo";

const osname = platform();



const FinishPanel = props => (
	<Panel id={props.id}>
		<Logo />
		<div >
			<p className='finishText'>
				Спасибо за Вашу помощь!
			</p>
		</div>

	</Panel>
);

FinishPanel.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default FinishPanel;
