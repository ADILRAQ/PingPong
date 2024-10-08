import { createContext } from 'react';
import { string } from 'yup';

export  type GameLodingProps = 
{
    users: Userinfo[],
    gameloding: boolean 
};

export    type Userinfo = { clientid: number , image : string , username : string , ingame : boolean , level : number , mode : string}



export type Gameresponse = { 
	player1 : number  ,
	player2 : number  ,
	player1score : number ,
	player2score : number ,
	ball :{ x: number , y: number },
	stop : number,
	gameover : boolean,
	iscollision : boolean,
	colormode : number,
 }


export  interface GameResultProps {
	playerPosition: string;
	scores: { player1score: number; player2score: number };
	runGame: boolean;
  }


  export type GameContextType = {
	lodingdata: GameLodingProps;
	gamemode: string;
	gametype: string;
	gamefriend: number;
	Isrunning: boolean;
	playerposition: string;
	setRunning: (running: boolean) => void;
	setGamemode: (mode: string) => void;
	settype: (type: string) => void;
	setgamefriend: (friend: number) => void;
	setlodingdata: (data: GameLodingProps) => void;
	setplayerposition: (position: string) => void;
  };


  




export const GameContext = createContext<GameContextType | null>(null);

export type Notificationdata = {
	invitationSenderID : string;
	username: string;
	userimage: string;
	message: string;
	mode : string;
	type : string;
}





export  interface gameExit
{
  gameExit : boolean;
  setgameExit : React.Dispatch<React.SetStateAction<boolean>>;
  winner : boolean;
}


export type leavegame = {
	id : number,
}