import * as firebase from 'firebase';
import FireBaseConfig from '../firebase.config';
let database;

export const fire = () => {
	if (!firebase.apps.length) {
		firebase.initializeApp(FireBaseConfig);
	}
	database = firebase.database();
};

export const getTimerDB = () => {
	return database.ref('/').once('value');
};
