import { Router, request, response, Request, Response} from "express";
import { abrirMatricula, deleteAluno, encerrarMatricula, getAluno, getAlunos, saveAluno, updateAluno } from "./controller/AlunosController";

const routes = Router()

routes.get('/aluno', getAlunos)
routes.get('/aluno/:id', getAluno)
routes.post('/aluno', saveAluno)
routes.put('/aluno/:id', updateAluno)
routes.delete('/aluno/:id', deleteAluno)
routes.patch('/alunoe/:id', encerrarMatricula)
routes.patch('/alunoa/:id', abrirMatricula)


export default routes