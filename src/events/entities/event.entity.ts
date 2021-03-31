import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index(['name', 'type'])
@Entity('events')
export class Event {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  type: string;
  @Column()
  name: string;
  @Column('json')
  payload: Record<string, any>;
}
