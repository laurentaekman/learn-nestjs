import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestEntity } from 'src/test.entity';
import { Transactions } from 'src/transactions.entity';
import { BankAccount } from 'src/bankAccount.entity';
import { AccountDetails } from 'src/accountDetails.entity';
import { Accounts } from 'src/accounts.entity';
import { AccountType } from 'src/accountType.entity';
import { Transaction } from 'src/transaction.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      synchronize: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([TestEntity]),
    TypeOrmModule.forFeature([Transactions]),
    TypeOrmModule.forFeature([BankAccount]),
    TypeOrmModule.forFeature([AccountDetails]),
    TypeOrmModule.forFeature([Accounts]),
    TypeOrmModule.forFeature([AccountType]),
    TypeOrmModule.forFeature([Transaction]),

    // TypeOrmModule.forFeature([
    //   TestEntity,
    //   Transactions,
    //   BankAccount,
    //   AccountDetails,
    //   Accounts,
    //   AccountType,
    //   Transaction,
    // ]), // Register your entity here
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
