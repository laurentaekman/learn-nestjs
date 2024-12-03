import { AccountDetails } from 'src/accountDetails.entity';
import { AccountType } from 'src/accountType.entity';
import { BankAccount } from 'src/bankAccount.entity';
import { Transactions } from 'src/transactions.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  OneToOne,
} from 'typeorm';

@Entity()
export class Accounts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  accountNumber: number;

  @Column()
  bankId: number;

  // This needed renaming to prevent accountType naming conflict
  @Column()
  accountTypeID: number;

  @OneToOne(() => AccountDetails, (accountDetails) => accountDetails.id)
  accountDetails: AccountDetails;

  @ManyToOne(() => AccountType, (accountType) => accountType.id)
  accountType: AccountType;

  @ManyToOne(() => BankAccount, (bankAccount) => bankAccount.id)
  bankAccount: BankAccount;

  @OneToMany(() => Transactions, (transactions) => transactions.payee)
  // TODO: Add in additional decorator JoinColumn?
  transactions: Transactions[];
}
