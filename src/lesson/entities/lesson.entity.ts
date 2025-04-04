import { ModuleClass } from 'src/module/entities/module.entity';
import { Progress } from 'src/progress/entities/progress.entity';
import { Task } from 'src/task/entities/task.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('lesson')
export class Lesson {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  title: string;

  @Column('text')
  unity: string;

  @Column('text')
  icon: string;

  @ManyToOne(() => ModuleClass, (module) => module.lessons, {
    onDelete: 'CASCADE',
    eager: true,
  })
  module: ModuleClass;

  @OneToMany(() => Task, (task) => task.lesson, {
    onDelete: 'CASCADE',
  })
  tasks: Task[];

  @OneToMany(() => Progress, (progress) => progress.task, {
    onDelete: 'CASCADE',
  })
  progress: Task[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
