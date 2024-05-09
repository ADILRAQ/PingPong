import { IsEnum, IsIn, IsInt, IsNotEmpty, IsString, ValidateNested } from "@nestjs/class-validator"
import { ROLE, ROOMTYPE } from "@prisma/client"
import { IsBoolean, IsOptional, ValidateIf } from "class-validator"
import { Room } from "./usersRooms/UserRoom.interface"
import { Type } from "class-transformer"

// Message Class
export class MessageDTO {

	@IsInt()
	from	:number

	@IsInt()
	to		:number

	@IsNotEmpty()
	@IsString()
	message	:string
}

export class RoomDTO {

	@IsInt()
	id			:number

	@IsNotEmpty()
	@IsString()
	name		:string

	@IsEnum(ROOMTYPE)
	// @IsString()
	type		:ROOMTYPE

	@IsEnum(ROLE)
	// @IsOptional()
	// @IsString()
	userRole	:ROLE
}

// Join room class
export class JoinRoomDTO {

	@IsInt()
	userId		:number

	@ValidateNested()
	@Type(() => Room)
	room	:Room
}


// Create room class
export class CreateRoom {

	@IsInt()
	ownerId		: number

	@IsNotEmpty()
	@IsString()
	name		:string

	@IsEnum(ROOMTYPE)
	@IsString()
	type		:ROOMTYPE

	// TODO: Check This
	@ValidateIf(o => o.type === ROOMTYPE.PROTECTED)
	@IsNotEmpty()
	@IsString()
	password	?:string

	@IsString()
	image		?:string
}

export class UpdateStatusRoom {

	@IsInt()
	fromId		:number

	@IsNotEmpty()
	@IsString()
	userName	:string

	@IsInt()
	userId	:number

	@IsNotEmpty()
	@IsString()
	roomName	:string

	@IsInt()
	roomId	:number

	@IsNotEmpty()
	@IsEnum(ROLE)
	@IsString()
	role	:ROLE

	@IsBoolean()
	isMuted	:boolean
}

export class UserOutDTO {

	@IsInt()
	adminId	:number

	@IsInt()
	userId	:number

	@IsInt()
	roomId	:number

	@IsString()
	roomName	:string
}

export class ChatData {
	id: number
	userName: string
	image: string
	lastMessage: string
	createdAt: Date
	// TODO: Handle This
	isOnline: boolean
	isRead: boolean
	isRoom: boolean
}

export class Messages {
	content :string
	userId :number
}

export class ConvData {
	id :number
	userName :string
	image :string
	messages :Messages[]
}

export class RoomUsers {
	userId		:number
	roomId		:number
	userName	:string
	image		:string
	isMuted		:boolean
	role		:ROLE
}