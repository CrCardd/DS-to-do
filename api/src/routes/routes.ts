import { Express } from 'express';
import express from 'express'
import person from './person.ts'
import auth from './auth.ts'
import task from './task.ts'

export default function (app: Express) {
    app
    .use(express.json())
    .use('', person)
    .use('', auth)
    .use('', task)
}