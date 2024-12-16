import { Accounts } from 'src/accounts.entity';
import { BankAccount } from 'src/bankAccount.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Transactions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bankId: number;

  @Column()
  amount: number;

  @Column()
  transactionType: string;

  @Column()
  payee: number;

  @ManyToOne(() => BankAccount, (bankAccount) => bankAccount.transactions)
  bankAccount: BankAccount;

  @ManyToOne(() => Accounts, (accounts) => accounts.id)
  accounts: Accounts;
}
