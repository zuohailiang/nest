import { Controller, Get, Req, HttpCode } from '@nestjs/common';
import { Request } from 'express';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface'

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Get()
    @HttpCode(204)
    findAll(@Req() request: Request): string {
        return '这是我所有的猫咪'
    }

    @Get('cat')
    findOne(): string {
        return '这是其中一直猫咪'
    }

    // @Post('create')
    // async create()

    @Get('find')
    async find(): Promise<Cat[]> {
        return this.catsService.findAll();
    }
}
