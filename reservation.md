--- 
layout: default 
title: Réservations
script: reservation.js
---

<div class="page-breadcrumb">
    <div class="container text-center">
        <h1>Réservations</h1>
    </div>
</div>
<div class="space-40"></div>
<div class="container">
    <div class="row">
        <div class="col-sm-8 col-sm-offset-2">
            <div class="margin-b-40">
                <h2 class="text-uppercase text-center">Horaires</h2>
                <p style="text-align: justify;">
                    Nous vous informons que nous acceptons des réservations à partir de 12h et jusqu' à 14h pour le service du midi et à partir de 19h et jusqu' à 22h pour le service du soir. Nous vous rappelons que le restaurant est fermé les dimanches soir et les lundis.
                </p>
            </div>
            <form  name="form" class="reservation-form" id="reservation-form">
                <div class="row">
                    <div class="col-sm-6" id="date_validate">
                    </div>
                    <div class="col-sm-6" id="name_validate">
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="input-group date">
                            <input type="text" class="form-control datepicker" name="date" placeholder="Date" readonly />
                            <div class="input-group-addon">
                                <span class="glyphicon glyphicon-th"></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="input-group">
                            <input type="text" class="form-control" name="name" placeholder="Nom" />
                            <div class="input-group-addon">
                                <span class="glyphicon glyphicon-user"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div id="email_validate">
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div id="time_validate">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="input-group">
                            <input type="email" class="form-control" name="email" placeholder="Email" />
                            <div class="input-group-addon">
                                <span class="glyphicon glyphicon-envelope"></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="input-group clockpicker">
                            <input type="text" class="form-control" name="time" placeholder="Time" readonly />
                            <div class="input-group-addon">
                                <span class="glyphicon glyphicon-time"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div id="quantity_validate">
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div id="phone_validate">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="input-group">
                            <input type="number" class="form-control" name="quantity" placeholder="Personnes" />
                            <div class="input-group-addon">
                                <span class="glyphicon glyphicon-user"></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="input-group">
                            <input type="text" class="form-control" name="phone" placeholder="Téléphone" />
                            <div class="input-group-addon">
                                <span class="glyphicon glyphicon-phone"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <input type="hidden" name="_subject" value="WEB: Nueva reservacion" />
                <p style="text-align: justify;" id="responseMessage"></p>
                <input type="submit" id="submitButton" class="btn btn-xl btn-dark btn-block" value="Submit" />
            </form>
        </div>
    </div>
</div>
<div class="space-40"></div>