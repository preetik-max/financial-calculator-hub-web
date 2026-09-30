export type CreditCardBank = "SBI" | "HDFC" | "AXIS";

export interface CreditCard {
  slug: string;
  name: string;
  bank: CreditCardBank;
  image: string;
  affiliateUrl: string;
}

export const creditCards: CreditCard[] = [
  { slug: "flipkart-axis", name: "Flipkart Axis Bank Credit Card", bank: "AXIS", image: "/images/cards/axis/flipkart_axis.png", affiliateUrl: "https://linkzip.in/ubdp5n" },
  { slug: "indigo-axis-rupay", name: "Indigo Axis RuPay Credit Card", bank: "AXIS", image: "/images/cards/axis/indigo_axis_rupay.png", affiliateUrl: "https://linkzip.in/xick9r" },
  { slug: "indigo-axis-premium", name: "Indigo Axis Premium Credit Card", bank: "AXIS", image: "/images/cards/axis/indigo_axis_premium.png", affiliateUrl: "https://linkzip.in/hw2spt" },
  { slug: "axis-privilege-amex", name: "Axis Privilege Amex Credit Card", bank: "AXIS", image: "/images/cards/axis/axis_privilege.png", affiliateUrl: "https://linkzip.in/j6y1vn" },
  { slug: "airtel-axis", name: "Airtel Axis Bank Credit Card", bank: "AXIS", image: "/images/cards/axis/airtel_axis.png", affiliateUrl: "https://linkzip.in/01bg6x" },
  { slug: "axis-neo", name: "Axis Bank Neo Credit Card", bank: "AXIS", image: "/images/cards/axis/axis_neo.png", affiliateUrl: "https://linkzip.in/twzw32" },
  { slug: "axis-my-zone", name: "Axis My Zone Credit Card", bank: "AXIS", image: "/images/cards/axis/axis_my_zone.png", affiliateUrl: "https://linkzip.in/r45zuj" },
  { slug: "axis-cashback", name: "Axis Bank Cashback Credit Card", bank: "AXIS", image: "/images/cards/axis/axis_cashback.png", affiliateUrl: "https://linkzip.in/85umf3" },
  { slug: "axis-horizon", name: "Axis Bank Horizon Credit Card", bank: "AXIS", image: "/images/cards/axis/axis_horizon.png", affiliateUrl: "https://linkzip.in/381uk6" },
  { slug: "indianoil-axis-rupay", name: "IndianOil Axis Bank RuPay Credit Card", bank: "AXIS", image: "/images/cards/axis/indianoil_axis_rupay.png", affiliateUrl: "https://linkzip.in/bwmy9z" },
  { slug: "axis-rewards", name: "Axis Bank Rewards Credit Card", bank: "AXIS", image: "/images/cards/axis/axis_rewards.png", affiliateUrl: "https://linkzip.in/36vh1q" },
  { slug: "axis-select", name: "Axis Bank SELECT Credit Card", bank: "AXIS", image: "/images/cards/axis/axis_select.png", affiliateUrl: "https://linkzip.in/5sf41x" },
  { slug: "axis-ace", name: "Axis Bank ACE Credit Card", bank: "AXIS", image: "/images/cards/axis/axis_ace.png", affiliateUrl: "https://linkzip.in/wzoiqh" },
  { slug: "lic-axis-signature", name: "LIC Axis Bank Signature Credit Card", bank: "AXIS", image: "/images/cards/axis/lic_axis_signature.png", affiliateUrl: "https://linkzip.in/qo4q8h" },
  { slug: "lic-axis-platinum", name: "LIC Axis Bank Platinum Credit Card", bank: "AXIS", image: "/images/cards/axis/lic_axis_platinum.png", affiliateUrl: "https://linkzip.in/4b46q0" },
  { slug: "axis-shoppers-stop", name: "Axis Bank Shoppers Stop Credit Card", bank: "AXIS", image: "/images/cards/axis/axis_shoppers_stop.png", affiliateUrl: "https://linkzip.in/c0kli1" },
  { slug: "sbi-cashback", name: "SBI Cashback Credit Card", bank: "SBI", image: "/images/cards/sbi/sbi_cashback.png", affiliateUrl: "https://linkzip.in/bf3aln" },
  { slug: "flipkart-sbi", name: "Flipkart SBI Credit Card", bank: "SBI", image: "/images/cards/sbi/flipkart_sbi.png", affiliateUrl: "https://linkzip.in/t2rrmt" },
  { slug: "bpcl-sbi-octane", name: "BPCL SBI Octane Credit Card", bank: "SBI", image: "/images/cards/sbi/bpcl_sbi_octane.png", affiliateUrl: "https://linkzip.in/2ct4en" },
  { slug: "bpcl-sbi", name: "BPCL SBI Credit Card", bank: "SBI", image: "/images/cards/sbi/bpcl_sbi.png", affiliateUrl: "https://linkzip.in/xr55c5" },
  { slug: "simplyclick-sbi", name: "SBI SimplyCLICK Credit Card", bank: "SBI", image: "/images/cards/sbi/sbi_simplyclick.png", affiliateUrl: "https://linkzip.in/b2g2wh" },
  { slug: "simplysave-sbi", name: "SBI SimplySAVE Credit Card", bank: "SBI", image: "/images/cards/sbi/sbi_simplysave.png", affiliateUrl: "https://linkzip.in/fpl5or" },
  { slug: "irctc-sbi-rupay", name: "IRCTC SBI RuPay Credit Card", bank: "SBI", image: "/images/cards/sbi/irctc_sbi_rupay.png", affiliateUrl: "https://linkzip.in/nitrcr" },
  { slug: "sbi-miles", name: "SBI MILES Credit Card", bank: "SBI", image: "/images/cards/sbi/sbi_miles.png", affiliateUrl: "https://linkzip.in/67gtb9" },
  { slug: "sbi-elite", name: "SBI ELITE Credit Card", bank: "SBI", image: "/images/cards/sbi/sbi_elite.png", affiliateUrl: "https://linkzip.in/scsscf" },
  { slug: "sbi-prime", name: "SBI Prime Credit Card", bank: "SBI", image: "/images/cards/sbi/sbi_prime.png", affiliateUrl: "https://linkzip.in/hpqvhe" },
  { slug: "tata-neu-plus-sbi", name: "Tata Neu Plus SBI Credit Card", bank: "SBI", image: "/images/cards/sbi/tata_neu_plus_sbi.png", affiliateUrl: "https://linkzip.in/94o6pf" },
  { slug: "tata-neu-infinity-sbi", name: "Tata Neu Infinity SBI Credit Card", bank: "SBI", image: "/images/cards/sbi/tata_neu_infinity_sbi.png", affiliateUrl: "https://linkzip.in/n11sj4" },
  { slug: "sbi-miles-prime", name: "SBI MILES PRIME Credit Card", bank: "SBI", image: "/images/cards/sbi/sbi_miles_prime.png", affiliateUrl: "https://linkzip.in/6ked4g" },
  { slug: "sbi-miles-elite", name: "SBI Miles Elite Credit Card", bank: "SBI", image: "/images/cards/sbi/sbi_miles_elite.png", affiliateUrl: "https://linkzip.in/611nbp" },
  { slug: "tata-neu-plus-hdfc", name: "Tata Neu Plus HDFC Bank Credit Card", bank: "HDFC", image: "/images/cards/hdfc/tata_neu_plus_hdfc.png", affiliateUrl: "https://linkzip.in/eyltta" },
  { slug: "tata-neu-infinity-hdfc", name: "Tata Neu Infinity HDFC Bank Credit Card", bank: "HDFC", image: "/images/cards/hdfc/tata_neu_infinity_hdfc.png", affiliateUrl: "https://linkzip.in/j9boxq" },
  { slug: "marriott-bonvoy-hdfc", name: "Marriott Bonvoy HDFC Bank Credit Card", bank: "HDFC", image: "/images/cards/hdfc/marriott_bonvoy_hdfc.png", affiliateUrl: "https://linkzip.in/e6kjc5" },
  { slug: "regalia-gold-hdfc", name: "HDFC Bank Regalia Gold Credit Card", bank: "HDFC", image: "/images/cards/hdfc/hdfc_regalia_gold.png", affiliateUrl: "https://linkzip.in/pxfq65" },
  { slug: "pixel-play-hdfc", name: "HDFC Bank Pixel Play Credit Card", bank: "HDFC", image: "/images/cards/hdfc/hdfc_pixel_play.png", affiliateUrl: "https://linkzip.in/31wc87" },
  { slug: "pixel-go-hdfc", name: "HDFC Bank Pixel Go Credit Card", bank: "HDFC", image: "/images/cards/hdfc/hdfc_pixel_go.png", affiliateUrl: "https://linkzip.in/m9neup" },
  { slug: "swiggy-hdfc", name: "Swiggy HDFC Bank Credit Card", bank: "HDFC", image: "/images/cards/hdfc/swiggy_hdfc.png", affiliateUrl: "https://linkzip.in/h36vk7" },
  { slug: "millennia-hdfc", name: "HDFC Bank Millennia Credit Card", bank: "HDFC", image: "/images/cards/hdfc/hdfc_millennia.png", affiliateUrl: "https://linkzip.in/e6mepl" },
  { slug: "moneyback-plus-hdfc", name: "HDFC Bank MoneyBack Plus Credit Card", bank: "HDFC", image: "/images/cards/hdfc/hdfc_moneyback_plus.png", affiliateUrl: "https://linkzip.in/tg0gik" },
  { slug: "upi-rupay-hdfc", name: "HDFC Bank UPI RuPay Credit Card", bank: "HDFC", image: "/images/cards/hdfc/hdfc_upi_rupay.png", affiliateUrl: "https://linkzip.in/gr2frl" },
  { slug: "rupay-irctc-hdfc", name: "HDFC Bank RuPay IRCTC Credit Card", bank: "HDFC", image: "/images/cards/hdfc/hdfc_rupay_irctc.png", affiliateUrl: "https://linkzip.in/6bd1ba" },
  { slug: "freedom-hdfc", name: "HDFC Bank Freedom Credit Card", bank: "HDFC", image: "/images/cards/hdfc/hdfc_freedom.png", affiliateUrl: "https://linkzip.in/pfrskg" },
  { slug: "shoppers-stop-black-hdfc", name: "Shoppers Stop Black HDFC Bank Credit Card", bank: "HDFC", image: "/images/cards/hdfc/shoppers_stop_black_hdfc.png", affiliateUrl: "https://linkzip.in/2ds65r" },
  { slug: "shoppers-stop-hdfc", name: "Shoppers Stop HDFC Bank Credit Card", bank: "HDFC", image: "/images/cards/hdfc/shoppers_stop_hdfc.png", affiliateUrl: "https://linkzip.in/cr9yg9" },
  { slug: "bizfirst-hdfc", name: "HDFC BizFirst Credit Card", bank: "HDFC", image: "/images/cards/hdfc/hdfc_bizfirst.png", affiliateUrl: "https://linkzip.in/v98jzr" },
  { slug: "bizgrow-hdfc", name: "HDFC BizGrow Credit Card", bank: "HDFC", image: "/images/cards/hdfc/hdfc_bizgrow.png", affiliateUrl: "https://linkzip.in/0q5xbk" },
  { slug: "bizpower-hdfc", name: "HDFC BizPower Credit Card", bank: "HDFC", image: "/images/cards/hdfc/hdfc_bizpower.png", affiliateUrl: "https://linkzip.in/3nnp13" },
  { slug: "bizblack-hdfc", name: "HDFC BizBlack Credit Card", bank: "HDFC", image: "/images/cards/hdfc/hdfc_bizblack.png", affiliateUrl: "https://linkzip.in/qbelms" },
  { slug: "diners-club-privilege-hdfc", name: "HDFC Bank Diners Club Privilege Credit Card", bank: "HDFC", image: "/images/cards/hdfc/hdfc_diners_club_privilege.png", affiliateUrl: "https://linkzip.in/8gks7q" },
  { slug: "diners-club-black-metal-hdfc", name: "HDFC Bank Diners Club Black Metal Edition Credit Card", bank: "HDFC", image: "/images/cards/hdfc/hdfc_diners_club_black_metal.png", affiliateUrl: "https://linkzip.in/hc8iwi" },
];

export const creditCardBanks: CreditCardBank[] = ["SBI", "HDFC", "AXIS"];
