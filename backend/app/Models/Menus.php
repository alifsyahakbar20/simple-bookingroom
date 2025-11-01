<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Traits\HasRoles;

class Menus extends Model
{
    use HasRoles;

    protected $table = 'menus';
}
