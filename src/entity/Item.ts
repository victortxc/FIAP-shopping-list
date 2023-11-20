import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  category: string;
  @Column()
  unit: string;
  @Column()
  quantity: number;
  @Column({
    default: false,
  })
  purchased: boolean;
  @CreateDateColumn()
  create_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
}
