import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    PrimaryGeneratedColumn
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn()
    created_at: string;
};

export default User;