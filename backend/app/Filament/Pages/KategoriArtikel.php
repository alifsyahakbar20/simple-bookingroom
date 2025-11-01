<?php

namespace App\Filament\Pages;

use App\Filament\Resources\ArtikelResource;
use App\Filament\Widgets\ArtikelChart;
use App\Models\Artikel;
use App\Models\User;
use Filament\Actions\Action;
use Filament\Actions\ActionGroup;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Pages\Page;
use Filament\Support\Enums\ActionSize;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Widgets\StatsOverviewWidget;

class KategoriArtikel extends Page
{
    protected static ?string $navigationIcon = 'heroicon-o-document-text';

    protected static string $view = 'filament.pages.kategori-artikel';

    protected static ?string $navigationGroup = 'Artikel';

    public bool $showModal = false;

    public $defaultAction = 'onboarding';

    public $defaultActionArguments = ['step' => 2];

    public function onboardingAction(): Action
    {
        return Action::make('onboarding')
            ->modalHeading('Welcome')
            ->modalDescription('Selamat datang di halaman admin!')
            ->modalSubmitActionLabel('Mulai')
            ->action(fn() => redirect(ArtikelResource::getUrl()));
    }

    protected function getHeaderWidgets(): array
    {
        return [
            ArtikelChart::class,
        ];
    }
}
