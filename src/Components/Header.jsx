import React from 'react';
import '../Styles/Allstyles.scss';
import PhoneInTalkTwoToneIcon from '@mui/icons-material/PhoneInTalkTwoTone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Header() {
  return (
    <div className='container header'>      
    <div class="row">
       <div class="col-md-12 text-end pt-2 ">
        <a class="p-1 pe-3" href="tel:+(254) 785746351"> <PhoneInTalkTwoToneIcon /> +(254) 785746351</a>
        <a class="p-1 pe-3" href="mailto:josman@gmail.com"> <MailOutlineIcon /> josman@gmail.com</a>
       </div>   
    </div>
  </div>

  )
}

export default Header