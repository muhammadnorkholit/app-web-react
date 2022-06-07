import React from 'react'
import { Link } from 'react-router-dom';

export default function Button({name,id,type,className,onClick,isLoading,isDisable,style,children,isEkstrenal,href,download}) {
    

    if (isLoading || isDisable) {
        return(
            <span className={className + ` disabled`} style={style}>{children}</span>
        )
        
    }
    if (type == 'link') {
        if(isEkstrenal)return(
            <a href={href} download={download} style={style} onClick={onClick} className={className} target='_blank' rel="nooper noreferer">{children}</a>
        );
        
        return(
            <Link to={href}  style={style} onClick={onClick} className={className}>{children}</Link>
        );
    }else if(type == 'reset' || type == 'submit' || type == 'button'){
        
        return(
            <button name={name} id={id} type={type} className={className} style={style} onClick={onClick}>{children}</button>
        )
    }else{
        return console.log('type tidak valid')
    }
 
}
