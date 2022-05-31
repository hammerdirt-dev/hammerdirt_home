import React, {FormEvent, FormEventHandler, MouseEventHandler} from 'react'
import {TextFieldProps} from "@mui/material";

export const some_users: {id:string, name:string, last:string, position:string, dept:string, email:string}[] = [
    {id:"1", name:"John", last:"Smith", position:"Associate", dept:"Botany", email: "john.smith@hammerdirt.ch"},
    {id:"2", name:"Laura", last:"Jones", position:"Staff", dept:"Botany", email: "laura.jones@hammerdirt.ch"},
    {id:"3", name:"Fatima", last:"Smith", position:"Staff", dept:"Hydrology", email: "fatima.smith@hammerdirt.ch"},
    {id:"4", name:"Jose", last:"Menendez", position:"Staff", dept:"Computing", email: "jose.menendez@hammerdirt.ch"},
]

const some_messages: {id:number, recipient:string, sender:string, subject:string, priority:number, message:string}[] = [
    {id:1, recipient:"john.smith@hammerdirt.ch", sender:"laura.jones@hammerdirt.sh", subject:"What a night", priority:0, message:"Things you shouldn´t put on the company message board"},
    {id:2, recipient:"laura.jones@hammerdirt.ch", sender:"fatima.smith@hammerdirt.sh", subject:"I work in IT", priority:0, message:"You do know that don't you?"},
    {id:0, recipient:"john.smith@hammerdirt.ch", sender:"laura.jones@hammerdirt.sh", subject:"What a night", priority:0, message:"Lets do that again"},
    {id:3, recipient:"john.smith@hammerdirt.ch", sender:"jose.menendez@hammerdirt.sh", subject:"what a night", priority:0, message:"what did i miss"},
];

export interface IModalContent {
    title: string,
    message: string
}

export interface ITransModal {
  handleSubmit: (data:{"email":any, "password":any}) => void,
  closeDialog: () => void,
  open: boolean,
  children: any,
  modalContent: {title: string, message: string},

}

export interface IAppBarProps {
  logged: boolean,
  handleClick: MouseEventHandler
}


export interface ITextFieldProps {
  emailField?:TextFieldProps,
  passWordField?:TextFieldProps,
  contentField?:TextFieldProps,
  titleField?:TextFieldProps
}

export interface IUser {
    id?:string,
    name?:string,
    last?:string,
    position?:string,
    dept?:string,
    email?:string
}

export interface IMessage {
    id?:number,
    recipient?:string,
    sender?:string,
    subject?:string,
    priority?:number,
    message?:string
}