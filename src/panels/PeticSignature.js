import React from 'react';
import PropTypes from 'prop-types';
import {Panel, Button} from '@vkontakte/vkui';
import './PeticSignature.css';
import Logo from "../content/Logo";

const PeticSignature = props => (
	<Panel id={props.id}>

        {/*Втавка компоненты с картинкой*/}
		<Logo />


		<div>
			<p className='peticText'>
				Для того что бы подписать петицию, поделитесь ссылкой с 10 друзьями.
			</p>
		</div>
		<Button className="button" onClick={props.sendFriends} size="xl" level="2" data-to="persik">
			Поделиться с друзьями
		</Button>
	</Panel>
);

PeticSignature.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default PeticSignature;
