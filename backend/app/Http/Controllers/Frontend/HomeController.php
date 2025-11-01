<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Datlechin\FilamentMenuBuilder\Models\Menu;

class HomeController extends Controller
{
    public function index()
    {
        $menu = Menu::location('header');
        return view('frontend.beranda.index', [
            'menu' => $menu,
        ]);
    }
}
