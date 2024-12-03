import { Transactions } from 'src/transactions.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  transactionType: number;

  @OneToMany(() => Transactions, (transactions) => transactions.transactionType)
  transactions: Transactions[];
}
