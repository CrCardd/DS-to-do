import { Express } from 'express';
import express from 'express'
import userRoutes from './userRoutes.ts'
import authRoutes from './authRoutes.ts'
import taskRoutes from './taskRoutes.ts'

export default function (app: Express) {
    app
    .use(express.json())
    .use('/user', userRoutes)
    .use('/auth', authRoutes)
    .use('/task', taskRoutes)
}