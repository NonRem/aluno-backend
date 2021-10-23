import {getRepository} from "typeorm";
import {Request, Response} from "express";
import {Alunos} from "../entity/Alunos";

export const getAlunos = async(request: Request, response: Response) => 
{
    const alunos = await getRepository(Alunos).find()
    return response.json(alunos)
}

export const getAluno = async(request: Request, response: Response) => 
{
    const {id} = request.params
    const aluno = await getRepository(Alunos).findOne(id)   
    return response.json(aluno)
}

export const saveAluno = async(request: Request, response: Response) =>
{
    const aluno = await getRepository(Alunos).save(request.body)
    return response.json(aluno)
}

export const updateAluno = async(request: Request, response: Response) =>
{
    const {id} = request.params
    const aluno = await getRepository(Alunos).update(id, request.body)

    if(aluno.affected == 1){
        const alunoUpdated = await getRepository(Alunos).findOne(id)
        return response.json(alunoUpdated)
    } else{
        return response.status(404).json({message: "Aluno não encontrada."})
    }
}

export const encerrarMatricula = async(request: Request, response: Response) =>
{
    const {id} = request.params
    const aluno = await getRepository(Alunos).update(id, {matriculado: false})
    
    if(aluno.affected == 1){
        return response.json({message: "Matricula encerrada."})
    } else{
        return response.status(404).json({message: "Aluno não encontrada."})
    }
}

export const abrirMatricula = async(request: Request, response: Response) =>
{
    const {id} = request.params
    const aluno = await getRepository(Alunos).update(id, {matriculado: true})

    if(aluno.affected == 1){
        return response.json({message: "Matricula aberta."})
    } else{
        return response.status(404).json({message: "Aluno não encontrada."})
    }
}

export const deleteAluno = async(request: Request, response: Response) =>
{
    const {id} = request.params
    const aluno = await getRepository(Alunos).delete(id)

    if(aluno.affected == 1){
        return response.json({message: "Registro deletado."})
    } else{
        return response.status(404).json({message: "Aluno não encontrada."})
    }

}