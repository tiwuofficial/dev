import Head from 'next/head';
import Main from 'components/common/main';
import styles from 'pages/accounts/index.module.css';
import { Account, getAccountList } from 'lib/microcms';

type Props = {
  accountList: Account[],
}

export default function AccountsPage(props: Props) {
  const { accountList } = props;

  return (
    <Main h1="Accounts">
      <Head>
        <title>Accounts</title>
        <meta name="description" content="Accounts" />
      </Head>
        <ul className={styles.ul}>
          {accountList.map((account) => (
            <li key={account.id} className={styles.li}>
                <p>{account.service} / <a href={account.url} className={styles.link} target="_blank" rel="noreferrer">@{account.account_id}</a></p>
            </li>
          ))}
        </ul>
    </Main>
  );
}

export const getStaticProps = async (): Promise<{
  props: Props
}> => {
  const accountList = await getAccountList();
  return {
    props: {
      accountList,
    },
  };
};
