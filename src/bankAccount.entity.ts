import { Accounts } from 'src/accounts.entity';
import { Transactions } from 'src/transactions.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class BankAccount {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bankName: string;

  @OneToMany(() => Transactions, (transactions) => transactions.bankId)
  transactions: Transactions[];

  @OneToMany(() => Accounts, (accounts) => accounts.bankId)
  accounts: Accounts[];
}
