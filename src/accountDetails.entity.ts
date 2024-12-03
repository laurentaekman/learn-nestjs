import { Accounts } from 'src/accounts.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';

@Entity()
export class AccountDetails {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  routingNumber: number;

  @Column()
  accountNumer: number;

  @OneToOne(() => Accounts, (accounts) => accounts.accountNumber)
  accounts: Accounts;
}
