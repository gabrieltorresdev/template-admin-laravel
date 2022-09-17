<?php

namespace App\Models;

use App\Models\Traits\Uuid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EcclesiasticalRole extends Model
{
    use HasFactory, Uuid;

    protected $guarded = [];

    public function people()
    {
        return $this->hasMany(Person::class);
    }
}
