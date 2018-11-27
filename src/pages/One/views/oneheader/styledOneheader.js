import styled from 'styled-components'

const Header = styled.header`
    height:.44rem;
    background:#fff;
    display:flex;
    line-height:.44rem;
   justify-content:space-between;
   position: absolute;
   top:0;
   left: 0;
   width:100%;
   z-index:111;
   /* overflow:hidden; */

   .am-accordion .am-accordion-item .am-accordion-header{
       width:50%;
       padding-right:0;
   }
   .am-accordion .am-accordion-item .am-accordion-content{
       /* height:${window.innerHeight-88+'px'} !important; */
   }
   .am-accordion-content-box{
       height:100%;
   }
   #oneheadScroll{
        height:100%;
   }
   h3{
       font-size:.23rem;
       width:3rem;
   
       span{
        font-size:.14rem
       }
   }
   .city{
        right:.1rem;
        line-height:.60rem;
        color:#8e8d8d;
        position: absolute;
   }
   ul{  
        display:flex;
        flex-wrap:wrap;
        padding:.2rem .1rem;
        .headli{
            width:48%;
            /* background:#656565; */
            /* height:30%; */
            img{
                width:100%
            }
            
        }
        li:nth-child(2n){
            margin-left:2%
        }
        p{
            text-align:center;
        }
   }
  
`
export {
    Header
}