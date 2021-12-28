import React from 'react';
import TodoContainer from '../Todo/Todo.container';
import HeaderComponent from '../Header/Header.component';
import { Grid, Segment, Tab } from 'semantic-ui-react';

export default function BoardComponent(props) {
	const { panes } = props;
	return (
		<div>
			<Tab panes={panes} renderActiveOnly={false} onClose={console.log('deleating this tab')} />
			<Grid>
				<Grid.Column width={4}>
					<Segment>
						<div>New Tasks here</div>
					</Segment>
				</Grid.Column>
				<Grid.Column width={8}>
					<TodoContainer />
				</Grid.Column>
				<Grid.Column width={4}>
					<Segment>
						<div>Completed Tasks here</div>
					</Segment>
				</Grid.Column>
			</Grid>
		</div>
	);
}
