import Head from 'next/head';
import style from './style.module.css';
import Image from 'next/image';

function Home() {
    return (
        <>
            <Head><title>Todo List</title></Head>
            <div className={style.container}>
                <div>
                    <table>
                        <tr className={style.firstTr}>
                            <td>#</td>
                            <td>TODO</td>
                            <td>ACTION</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" value="1" /></td>
                            <td>ORIENTAR TRABALHO</td>
                            <td>
                                <Image alt="tst" src="/bxs-edit.svg" height="30px" width="30px" />
                                <Image alt="tst" src="/bxs-trash.svg" height="30px" width="30px" />

                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Home;