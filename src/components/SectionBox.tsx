import React from 'react'

interface SectionPropsBox {
    color: string;
    title: string;
    description: string
    Icon: string;
    href: string;
}

function SectionBox({ color = 'poison', title, description, Icon, href }: SectionPropsBox) {
    return (
        <a href={href}>
            <div
                className={` group transition border-t-8 border-${color}  
                bg-bgPrimary   
             
                 rounded-md shadow-2xl p-4 
                 px-9 hover:-translate-x-10`}
            >
                <div className="flex justify-between content-center gap-2 flex-wrap">
                    <h5 className="text-2xl font-bold  textPrimary  capitalize ">{title}</h5>
                    <Icon
                        className="text-4xl "
                    />
                </div>
                <p className="text-textSecondary text-xs">{description} </p>
            </div>
        </a>

    );
}

export default SectionBox