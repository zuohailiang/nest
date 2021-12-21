import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface'

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];

    create(cat: Cat) {
        this.cats.push(cat);
    }

    findAll(): Cat[] {
        return [{
            name: '小咪',
            age: 2,
            breed: '在捉老鼠'
        },{
            name: '大咪',
            age: 5,
            breed: '在睡觉'
        }]
    }
}
