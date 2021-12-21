import { Controller, Get } from '@nestjs/common';

@Controller('posts')
export class PostsController {
    @Get()
    index() {
        return [
            {id: 1},
            {id: 2},
            {id: 3},
            {id: 4}
        ]
    }
}
