import React, { useEffect, useRef, useState } from 'react'
import '../styles/helpCenter/helpCenter.scss'
import { ReactComponent as HepsiBurada } from '../assets/icons/hepsiburada.svg'
import { ReactComponent as Categories } from '../assets/icons/categories.svg'
import { ReactComponent as ShipmentBox } from '../assets/icons/shipment-box.svg'
import { ReactComponent as MyCart } from '../assets/icons/my-cart.svg'
import { ReactComponent as ChevronLeft } from '../assets/icons/chevron-left.svg'
import { ReactComponent as Search } from '../assets/icons/search.svg'

import { ReactComponent as F1 } from '../assets/icons/f1.svg'
import { ReactComponent as F2 } from '../assets/icons/f2.svg'
import { ReactComponent as F3 } from '../assets/icons/f3.svg'
import { ReactComponent as F4 } from '../assets/icons/f4.svg'

import { ReactComponent as Phone1 } from '../assets/icons/phone1.svg'
import { ReactComponent as Phone2 } from '../assets/icons/phone2.svg'
import { ReactComponent as Phone3 } from '../assets/icons/phone3.svg'

import Footer1 from '../assets/icons/footer1.png'
import Footer2 from '../assets/icons/footer2.png'
import Footer3 from '../assets/icons/footer3.png'
import Footer4 from '../assets/icons/footer4.png';
import Footer5 from '../assets/icons/footer5.png';

import { ReactComponent as Facebook } from '../assets/icons/facebook.svg'
import { ReactComponent as Youtube } from '../assets/icons/youtube.svg'
import { ReactComponent as Twitter } from '../assets/icons/twitter.svg'
import { ReactComponent as Linkedin } from '../assets/icons/linkedin.svg'
import { ReactComponent as GooglePlus } from '../assets/icons/google-plus.svg'
import { ReactComponent as Pinterest } from '../assets/icons/pinterest.svg'
import { ReactComponent as Instagram } from '../assets/icons/instagram.svg'
import { ReactComponent as MessagingWhatsapp } from '../assets/icons/messaging-whatsapp.svg'

import Faq from '../assets/icons/5.png'
import headImage from '../assets/icons/head-image.jpg';
import { Button } from '../components/Button';
import axios from 'axios'
import { animateScroll } from '../utils/animateScroll'

export const HelpCenter = () => {

    const [faq, setFaq] = useState()
    const [categories, setCategories] = useState()
    const [selectedCtg, setSelectedCtg] = useState(18)

    const [selectedPrnt, setSelectedPrnt] = useState()
    let footerRightData = ["Sipari??lerim", "??ade", "Yard??m"]
    let footerData = ["Kullan??c?? Bilgilerim", "????lem Rehberi", "Hepsiburada.com Twitter Destek", "Mobil Uygulamalar", "Bilgi Toplumu Hizmetleri", "G??venli Al????veri?? K??lavuzu", "Ki??isel Verilerin Korunmas??", "Bilgi G??venli??i Politikas??", "???? Sa??l?????? ve G??venli??i ??evre Politikam??z", "Hepsiburada ile E-ticaret Reklamc??l??????", "Kurumsal Hediye ??eki"]

    useEffect(() => {
        axios.get('https://api-cozummerkezi.hepsiburada.com/faqcategories/parentcategories/helppage')
            .then(({ data }) => {
                setCategories(data)
            })

        axios.get('https://api-cozummerkezi.hepsiburada.com/faqs/directory')
            .then(({ data }) => {
                setFaq(data);
            })
    }, [])

    let parentcategory = []
    faq?.forEach(a => {
        a?.categories.forEach(b => {
            let data = { ...b, 'parentCategoryId': a?.parentCategoryId }
            parentcategory.push(data)
        })
    });
    useEffect(() => {
        setSelectedPrnt(parentcategory?.filter(x => x?.parentCategoryId === selectedCtg)[0]?.categoryId)
    }, [selectedCtg])


    const scrollRef = useRef()
    const getElementPosition = (element) => element.offsetTop;

    const ScrollCategory = (id) => {

        scrollRef.current.scrollIntoView({ behavior: 'smooth', block: "nearest" })

        const initialPosition = window.scrollY;
        const element = id ? document.getElementById(id) : null;
        let duration = 1000
        animateScroll({
            targetPosition: getElementPosition(element),
            initialPosition,
            duration
        });
    }

    let faqs = []
    parentcategory.forEach(x => x?.faqs.forEach(a => faqs.push(a?.name)))

    const [value, setValue] = useState()
    const [newData, setNewData] = useState()
    const [enter, setEnter] = useState(false)

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setEnter(true)
            setNewData(faqs?.filter((x, i) => x?.toLowerCase().includes(value?.toLowerCase())))
        }
    }

    return (
        <div className='main'>
            <div className='header'>
                <div className='icon-div'><HepsiBurada></HepsiBurada></div>
                <div className='category'><Categories className='svgWeight'></Categories> <span className='text-category'>Kategoriler</span></div>
                <div> <span className='searchIcon' ><Search /></span><input type="search" className='header search' placeholder='25 milyon???dan fazla ??r??n i??inde ara'></input></div>
                <div className='right'>
                    <div className='cart'><MyCart className='svgWeight'></MyCart> <span>Sepetim</span></div>
                    <div className='cart'><ShipmentBox className='svgWeight'></ShipmentBox><span>Sipari??lerim</span></div>
                    <div className='profile'><span>HN</span></div>
                </div>
            </div>
            <div className='body-div'>
                <div className='body-top'>
                    <div className='top-left'><img src={headImage} alt=''></img></div>
                    <div className='top-right'>
                        <span id='txt-1'>Merhaba, Yavuz G??lo??lu</span>
                        <span id='txt-2'>Size nas??l yard??mc?? olabiliriz?</span>
                        <div className='top-button'><Button className='buttonClass' size={'large'} color={'primary'} text='Sipari??imle ilgili sorum var'></Button><Button className='buttonClass' size={'large'} text='Farkl?? bir konuda sorum var' color={'ghost'}></Button> </div>
                        <div className='top-rectangle'>
                            <div className='rectangle-header'>Son destek talebim <span>{"T??m?? >"}</span></div>
                            <div className='rectangle'>
                                <div className='rectangle-img'><img src={headImage} alt=''></img></div>
                                <div className='rectangle-text'>
                                    <div className='d-flex'>
                                        <div className='title-div'>
                                            <span id='txt-3'>??r??n??m?? nas??l iade edebilirim?</span>
                                            <span id='txt-4'>????z??m Merkezi: Merhaba Enes Bey, 517532223 numaral??...</span>
                                        </div>
                                        <div className='next-div'> <ChevronLeft /></div>
                                    </div>
                                    <div className='rectangle-list'>
                                        <div className='list-div'>
                                            <span id='txt-3'>SON G??NCELLEME</span>
                                            <span id='txt-4'>24 Haziran ??ar??amba </span>
                                        </div>
                                        <div className='list-div'>
                                            <span id='txt-3'>TALEP NO</span>
                                            <span id='txt-4'>23698179</span>
                                        </div>
                                        <div className='list-div'>
                                            <span id='txt-3'>S??PAR???? NO</span>
                                            <span id='txt-4'>432 046 021</span>
                                        </div>
                                        <div className='list-div'>
                                            <span id='txt-3'>TALEP NO</span>
                                            <span className='status-div list-bg'>Kapand??</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='body-mid'>
                    <div className='mid-category-div'>
                        <div className='mid-menu'>
                            <span>Merak edilenler</span>
                            <div className='mid-category-1' >
                                <img width={24} height={24} src={Faq} alt=''></img>
                                <span className={`${selectedCtg === 'faq011' && 'selectedCtg'}`} onClick={() => setSelectedCtg('faq011')}>S??k??a sorulan sorular</span>
                            </div>
                            {
                                categories?.map((x, i) => (
                                    <div key={i} className={`mid-category ${selectedCtg === x?.id && 'selectedCtg'}`} onClick={() => setSelectedCtg(x?.id)}>
                                        <div className='mid-ctg'>
                                            {selectedCtg === x?.id ? <div className='selectedCtg-imgDiv'> <ChevronLeft /></div> : <img width={24} height={24} src={x?.iconUrl} alt=''></img>}
                                            <span>{x?.helpPageName}</span>
                                        </div>
                                        {
                                            selectedCtg === x?.id &&
                                            <div className='parentCtg-div'>
                                                <span className='ctg-line'></span>
                                                <div className='parentCtg-div-2'>
                                                    {
                                                        parentcategory?.map((j, i) => (
                                                            selectedCtg === j?.parentCategoryId &&
                                                            <>
                                                                <div key={i} className={`ctg-parent ${selectedPrnt === j?.categoryId && 'selectParent'}`} onClick={() => { setSelectedPrnt(j?.categoryId); ScrollCategory(j?.categoryId) }}>{j?.categoryName}</div>
                                                            </>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        }
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                    <div className='mid-body'>
                        <div> <span className='mid-search-icon' ><Search /></span><input type="search" className='mid-input' placeholder='25 milyon???dan fazla ??r??n i??inde ara' onKeyDown={handleKeyDown} onChange={(e) => { setValue(e.target.value); setEnter(false) }}></input></div>
                        {selectedCtg === 'faq011' && <div div className='faq-title'>S??k??a sorulan sorular</div>}
                        {
                            value?.length > 0 && newData && enter ?
                                <div className='mid-faq'>
                                    {
                                        newData?.map((x, i) => (
                                            <div key={i} className={(parentcategory?.length - 1) !== i ? 'faq-list lstBrdr' : 'faq-list'}>
                                                <span>{x}</span>
                                                <div className='faq-next-div'> <ChevronLeft /></div>
                                            </div>
                                        ))
                                    }
                                </div>
                                :
                                parentcategory?.map((x) => (
                                    <>
                                        {selectedCtg === x?.parentCategoryId && <div className='faq-title' id={x?.categoryId} title={x?.categoryName} ref={scrollRef}>{x?.categoryName}</div>}
                                        {
                                            selectedCtg === x?.parentCategoryId &&
                                            <div className='mid-faq'>
                                                {
                                                    x?.faqs.map((y, i) => (
                                                        <div key={i} className={(parentcategory?.length - 1) !== i ? 'faq-list lstBrdr' : 'faq-list'}>
                                                            <span>{y?.name}</span>
                                                            <div className='faq-next-div'> <ChevronLeft /></div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        }
                                    </>
                                ))
                        }
                    </div>
                </div>
                <div className='body-footer'>
                    <div className='footer-top'>
                        <div className='icon'><HepsiBurada></HepsiBurada></div>
                        <div>
                            {
                                footerRightData?.map((x, i) => (
                                    <>
                                        <span key={i} id='txt-5'>{x}</span> {footerRightData?.length - 1 !== i && <span id='txt-6'>|</span>}
                                    </>
                                ))
                            }
                        </div>
                    </div>
                    <div className='footer-mid'>
                        <div className='col-footer'>
                            <div className='col-title'>Bug??n Teslimat</div>
                            <div className='col-svg border-col'><F1 /></div>
                            <div className='col-text'>Saat 14:00'e kadar verece??iniz sipari??ler ayn?? g??n kap??n??zda.</div>
                        </div>
                        <div className='col-footer'>
                            <div className='col-title'>Tek T??kla G??venli Al????veri??</div>
                            <div className='col-svg border-col'><F2 /></div>
                            <div className='col-text'>??deme ve adres bilgilerinizi kaydedin, g??venli al????veri?? yap??n.</div>
                        </div>
                        <div className='col-footer'>
                            <div className='col-title'>Mobil Cebinizde</div>
                            <div className='col-svg border-col'><F3 /></div>
                            <div className='col-text'>Diledi??iniz her yerden g??venli al????veri??in keyfini ????kar??n.</div>
                        </div>
                        <div className='col-footer'>
                            <div className='col-title'>Kolay ??ade</div>
                            <div className='col-svg'><F4 /></div>
                            <div className='col-text'>Ald??????n??z ??r??n?? iade etmek hi?? bu kadar kolay olmam????t??.</div>
                        </div>

                    </div>

                    <div className='footer-bot'>
                        <section className='footer-section mrg-right'>
                            <span id='txt-3'>Hepsiburada</span>
                            <ul>
                                {
                                    footerData?.map((x, i) => (
                                        <li key={i} className='li-txt'>{x}</li>
                                    ))
                                }
                            </ul>
                            <span id='txt-3'>Kurumsal</span>
                            <ul>
                                {
                                    footerData?.map((x, i) => (
                                        <li key={i} className='li-txt'>{x}</li>
                                    ))
                                } </ul>
                        </section>
                        <section className='footer-section mrg-right'>
                            <span id='txt-3'>Kategoriler</span>
                            <ul>
                                {
                                    footerData?.map((x, i) => (
                                        <li key={i} className='li-txt'>{x}</li>
                                    ))
                                }
                            </ul>
                            <span id='txt-3'>Pop??ler Telefonlar</span>
                            <ul>
                                {
                                    footerData?.map((x, i) => (
                                        <li key={i} className='li-txt'>{x}</li>
                                    ))
                                } </ul>
                        </section>
                        <section className='footer-section mrg-right'>
                            <span id='txt-3'>??zel Sayfalar</span>
                            <ul>
                                {
                                    footerData?.map((x, i) => (
                                        <li key={i} className='li-txt'>{x}</li>
                                    ))
                                }
                            </ul>
                        </section>
                        <section className='footer-section mrg-right'>
                            <span id='txt-3'>Bizi Takip Edin</span>
                            <ul>
                                <li className='li-txt'> <div className='social-media'> <div className='social-circle'><Facebook /></div><span className='social-media-text'>Facebook</span></div></li>
                                <li className='li-txt'> <div className='social-media'><div className='social-circle'><Youtube /></div><span className='social-media-text'>Youtube</span></div></li>
                                <li className='li-txt'> <div className='social-media'><div className='social-circle'><Twitter /></div><span className='social-media-text'>Twitter</span></div></li>
                                <li className='li-txt'> <div className='social-media'><div className='social-circle'><Pinterest /></div><span className='social-media-text'>Pinterest</span></div></li>
                                <li className='li-txt'> <div className='social-media'><div className='social-circle'><GooglePlus /></div><span className='social-media-text'>Google+</span></div></li>
                                <li className='li-txt'> <div className='social-media'><div className='social-circle'><Linkedin /></div><span className='social-media-text'>Linkedin</span></div></li>
                                <li className='li-txt'> <div className='social-media'><div className='social-circle'><Instagram /></div><span className='social-media-text'>Instagram</span></div></li>
                            </ul>
                            <span id='txt-3'>??deme</span>
                            <ul>
                                <li className='li-txt'>??deme Se??enekleri</li>
                                <li className='li-txt'>Banka Kampanyalar??</li>
                            </ul>
                        </section>
                        <section className='footer-section'>
                            <span id='txt-7'>Akl??n??za tak??lan bir soru mu var?</span>
                            <div className='solution-center'><span>????z??m Merkezine ba??lan??n</span></div>
                            <div className='and-div'><span >veya</span></div>
                            <span className='solution-center-text'>??a??r?? Merkezimizi aray??n</span>
                            <a href="tel:0850-252-4000" className="solution-center-phone">0850 252 40 00</a>
                            <div className='whatsApp-solution'><MessagingWhatsapp /><span>WhatsApp Destek</span></div>
                            <span id='txt-3'>??deme</span>
                            <div className='mobil-app-div'>
                                <div className='phone1'><Phone3 /></div>
                                <div className='phone-text'><span>APP STORE'dan</span>??ND??REB??L??RS??N??Z</div>
                            </div>
                            <div className='mobil-app-div'>
                                <div className='phone1'><Phone1 /></div>
                                <div className='phone-text'><span>GOOGLE PLAY'den</span>??ND??REB??L??RS??N??Z</div>
                            </div>
                            <div className='mobil-app-div mobil-mb'>
                                <div className='phone1'><Phone2 /></div>
                                <div className='phone-text'><span>APP GALLERY'den</span>??ND??REB??L??RS??N??Z</div>
                            </div>
                            <span id='txt-3'>Giyim-Moda</span>
                            <ul>
                                <li className='li-txt'>Etek / Elbise / Tunik / Tren??kot</li>
                                <li className='li-txt'>Ayakkab?? / Spor Ayakkab??</li>
                                <li className='li-txt'>Abiye Elbise / ??anta</li>
                                <li className='li-txt'>Nike Air Force / Nike Air Max</li>
                            </ul>
                        </section>
                    </div>
                </div>
                <div className='footer-end'>
                    <div className='end-div'>
                        <div className='end-left'>
                            <div className='end-txt'>??NTERNETTE G??VENL?? ALI??VER????</div>
                            <div>
                                <img className='end-icon' src={Footer2} alt=''></img>
                                <img className='end-icon' src={Footer1} alt=''></img>
                                <img className='end-icon' src={Footer3} alt=''></img>
                                <img className='end-icon' src={Footer4} alt=''></img>
                            </div>
                        </div>
                        <div className='end-right'>
                            <div> <img className='end-icon' src={Footer5} alt=''></img></div>
                            <div className='end-right-txt'>
                                <span >Her ??ey aya????na gelsin! ?? Copyright 1998 - 2018 D-MARKET Elektronik Hizmetler Tic. A.??. Her Hakk?? Sakl??d??r. </span>
                                <span className='endTxt'>Hepsiburada.com, Bir Do??an Online Markas??d??r.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
