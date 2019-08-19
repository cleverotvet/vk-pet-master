import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListItem, Button, Group, UsersStack } from '@vkontakte/vkui';
import Text from "../content/Text";
import Logo from "../content/Logo";
import './Home.css';


const Home = ({ id, go, fetchedUser }) => (

	<Panel id={id}>
		{fetchedUser &&
		<Group>
			<ListItem className="userName">
				{`${fetchedUser.first_name} ${fetchedUser.last_name}! Помогите животным!`}
			</ListItem>
		</Group>}



		{/*В этой компоненте хранится картинка приложения*/}
		<Logo />


		{/*Первая (красная) кнопка подписи петиции*/}
		<Button className="button1" size="xl" level="2" onClick={go} data-to="PeticSignature">
			Подписать петицию
		</Button>

		{/*В этой компоненте хранится текст для петиции*/}
		<Text />


		{/*Вторая (Синяя) кнопка подписи петиции*/}
		<Button className="button2" size="xl" level="2" onClick={go} data-to="PeticSignature">
			Подписать петицию
		</Button>


		{/*Блок с подписавшими петицию*/}
		<Group title="Последние подписавшие петицию">
			<UsersStack
				photos={[
					'https://pp.userapi.com/c851320/v851320118/cf288/Qka4j0SAe9g.jpg?ava=1',
					'https://pp.userapi.com/c849216/v849216398/d3fd0/8UUTAvrLzRg.jpg?ava=1',
					'https://pp.userapi.com/c627218/v627218285/32875/T6WSlJgzVDs.jpg?ava=1',
					'https://pp.userapi.com/c849416/v849416080/5d9a2/Yt-IYL_wgjI.jpg?ava=1',
					'https://pp.userapi.com/c840437/v840437044/208e/t8l-ozcjkDc.jpg?ava=1'
				]}
				size="m"
				count={5}
				vertical
			>Елена, Дарья, Екатерина<br />и ещё 167387 человека</UsersStack>
		</Group>

	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
