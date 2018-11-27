import styled from 'styled-components'

const OneList = styled.div`
    /* position:absolute;
    top:.44rem;
    left:0;
    z-index:11111; */
    /* padding-top:.44rem; */
    height:99%;
    >div{
        padding-top:.44rem;
    }

`
const ListBar = styled.div`
    position:relative; 
    height:100%;
    background:#fff;
    >h5{
        text-align:center;
        font-weight:100;
        height:10%;
        color:#666;
    }
`

const ListOne = styled.div`
    position:relative;
    padding-bottom:67%;
    font-size:0;
    >img{
        position:absolute;
        width:100%;
    }
`
const ListOneC = styled.div`
    text-align:center;
    color:#828282;
    padding-top:10%;
    height:35%;
    p {
        padding:10%;
        color:#3a3a3a;
        font-size:.14rem;
       
        text-align:left;
    }
`
const ListOneZ = styled.div`
    display:flex;
    background:#FFF;
    padding:10% .2rem;
    justify-content:space-between;
    span{
        img{
            display: inline-block;
            height:.2rem;
        }
       
    };
    h4{
        width:50%;
        color:#666;
        img{
            height:.2rem;

        }
    }
`
const VOL = styled.div`
    margin:.2rem 0;
    background:#fff;
    text-align:center;
    width:100%;
    height:.4rem;
    line-height:.4rem;

    ul{
        background:#fff;
        text-align:left;
        position: relative;
        z-index:111;
        li{
            display:flex;
            flex-direction:column;
            padding-left:.3rem;
            position:relative;
            span{
                display:inline-block;
                line-height:.18rem;
                height:.18rem;
                color:#666;
            }
            b{
                color:#656565;
                line-height:.35rem;
                height:.35rem;
            }
            img{
                height:.1rem;
                position: absolute;
                left:.1rem;
                top:.2rem
            }
        }
    }
`
const Lastlist = styled.div`

    .zimg{
        padding:.1rem .1rem;
        background:#fff;
        margin-bottom:.1rem;
        width:100%;
        text-align:center;
        .ztitle{
            font-size:.18rem;
            display: block;
            text-align:left;
            /* line-height:.5rem; */
            height:.5rem;
        }
        .zzoom{
            text-align:left;
            padding-left:.1rem;
            height:.3rem;
        }
        p{
        position:relative;
        padding-bottom:64%;
        font-size:0;
        width:100%;
            img{
                position:absolute;
                width:100%;
                left:0
            }
        }
        h5{
            font-weight:100;
            color:#656565;
            text-align:left;
        }
        .zdivlast{
            display:flex;
            justify-content:space-between;
            text-align:left;
            h6{
                width:75%;
                color:#ccc;
            }
            span{
                img{
                    width:.2rem;
                    height:.2rem;
                }
            }
        }
        .musicImg{
            img{
            border-radius:50%;
            padding: 0 20%;
            }
        }
    }

`
export {
    ListOne,
    ListOneC,
    ListBar,
    ListOneZ,
    OneList,
    VOL,
    Lastlist,
}