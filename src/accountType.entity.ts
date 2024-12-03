import { Accounts } from 'src/accounts.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class AccountType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  accountType: string;

  @OneToMany(() => Accounts, (accounts) => accounts.accountType)
  accounts: Accounts;
}
