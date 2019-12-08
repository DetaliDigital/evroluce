<?php

require_once MODX_CORE_PATH . 'components/minishop2/model/minishop2/msdeliveryhandler.class.php';

class msDifferentPricesDelivery extends msDeliveryHandler {
    public function getCost(msOrderInterface $order, msDelivery $delivery, $cost = 0.0)
    {
        $cart = $this->ms2->cart->status();
        $weight_price = $delivery->get('weight_price');
        $idDelivery = $delivery->get('id');
        $paramPriceDelivery = $this->modx->getOption('ms2_cart_dpd_param');
        $paramPriceDelivery = str_replace(" ","",$paramPriceDelivery);
        $cart_cost = $cart['total_cost'];
        //$distance_price = $delivery->get('distance_price');
        $cart_weight = $cart['total_weight'];
        $cost += $weight_price * $cart_weight;
        $add_price = '';
        if (preg_match('/%$/', $add_price)) {
            $add_price = str_replace('%', '', $add_price);
            $add_price = $cost / 100 * $add_price;
        }
         
         $arrParamPriceDelivery = explode(";", $paramPriceDelivery); // разделяем разные способы доставки

        //сопоставляем ид доставки и параметры цены
        $idKey = '';
        $idValue = '';
        foreach ($arrParamPriceDelivery as $value) {
            $id = explode("=", $value);
            $idKey .= $id[0].';';
            $idValue .= $id[1].';';
        }

        $idKey = explode(";", $idKey);
        $idValue = explode(";", $idValue);
        $result = array_combine($idKey, $idValue);

        //удаляем первую и последнюю скобку в строке
        $paramPrice = substr($result[$idDelivery],1,-1);

        // создаем массивы отношения цены и стоимости доставки
        preg_match_all("#([^,\s]+):([^,\s]+)#s",$paramPrice,$paramPrice);

        $paramPrice = array_combine($paramPrice[1], $paramPrice[2]);

        foreach ($paramPrice as $key => $value) {
            if ($cart_cost < $key) {
                $add_price = $value;
                break;
            }
            $add_price = $value;
        }

        $cost += $add_price;
        return $cost;
    }
}
