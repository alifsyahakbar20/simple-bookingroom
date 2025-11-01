<x-filament::page>
    <x-filament::modal id="tambah-kategori-modal" :visible="$showModal" wire:model="showModal">
        <x-slot name="header">
            <h2 class="text-lg font-bold">Tambah Kategori</h2>
        </x-slot>

        <x-slot name="content">
            <x-filament::input label="Nama Kategori" wire:model.defer="namaKategori"
                placeholder="Masukkan nama kategori" />
        </x-slot>

        <x-slot name="footer">
            <x-filament::button wire:click="simpanKategori" color="primary">
                Simpan
            </x-filament::button>

            <x-filament::button color="secondary" wire:click="$set('showModal', false)">
                Batal
            </x-filament::button>
        </x-slot>
    </x-filament::modal>
</x-filament::page>
