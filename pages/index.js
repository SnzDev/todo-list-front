import Head from 'next/head';
import style from './style.module.css';
import Image from 'next/image';
import { useState } from 'react';

function Home() {
    const [table,setTable] = useState({'att':'ORIENTAR TRABALHO', 'checked':true});

    function changeChecked(){
        if(table.checked){
            setTable({'att':table.att, 'checked':false});
        }else{
            setTable({'att':table.att, 'checked':true});
        }
	 console.log(table.checked)
    }
    function remove(){
	let option = confirm("Do you confirm?");
	    if(option){
		setTable('');
	    }
    }
    function edit(){
    	//alert("You're trying to edit this todo");
    	let text = prompt("What is your todo?")
	    console.log(text)
	    console.log(table.att)
	    setTable({'att':text, 'checked':table.checked})
    }
    return (
        <>
            <Head><title>Todo List</title></Head>
            <div className={style.container}>
                 <table>
                        <tr className={style.firstTr}>
                            <td>#</td>
                            <td>TODO</td>
                            <td>ACTION</td>
                        </tr>
                        <tbody className={style.tr}>
                            <td><input type="checkbox" value={table.checked} onChange={changeChecked}/></td>
                            <td className={style.notChecked}>{table.att}</td>
                            <td>
	    			Testing the feature save!
                                <a onClick={edit}><Image alt="tst" src="/bxs-edit.svg" height="30px" width="30px" /></a>
                                <a onClick={remove}><Image alt="tst" src="/bxs-trash.svg" height="30px" width="30px" /></a>
                            </td>
                        </tbody>
                    </table>
              </div>
        </>
    );
}

export default Home;
