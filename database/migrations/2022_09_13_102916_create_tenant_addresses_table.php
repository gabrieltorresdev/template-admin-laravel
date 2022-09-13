<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tenant_addresses', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('cep');
            $table->string('address');
            $table->string('number');
            $table->string('adjunct');
            $table->string('district');
            $table->string('city');
            $table->string('state');
            $table->string('tenant_id')->index();

            $table->foreign('tenant_id')->references('id')->on('tenants')->cascadeOnDelete()->cascadeOnUpdate();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tenant_addresses');
    }
};