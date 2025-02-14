import { Express } from 'express';
import express from 'express'
import person from './person.ts'
import auth from './auth.ts'

export default function (app: Express) {
    app
    .use(express.json())
    .use('/api/person', person)
    .use('', auth)
}