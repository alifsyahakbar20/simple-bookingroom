'use client'

import { useState } from 'react'
import Image from 'next/image'
import Button from '@/components/atoms/Button'
import Link from 'next/link'

export default function AdminLoginPage() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        setLoading(false)
    }

    return (
        <div className="flex min-h-screen bg-white">
            <div className="hidden md:flex w-3/5 items-center justify-center bg-gray-100 relative">
                <Image src="/images/bg-login-admin.jpg" alt="" fill className="object-cover rounded-r-2xl" />
            </div>

            <div className="flex w-full md:w-2/5 items-center justify-center px-2 py-12">
                <div className="w-full max-w-md">
                    <div className='mb-8 flex justify-center md:justify-start w-full'>
                        <Link href="/" className=''>
                            <Image src="/images/logo.png" alt='Roomify' width={190} height={500} />
                        </Link>
                    </div>

                    <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-center md:text-start">Masuk atau buat akun</h3>
                    <p className="text-sm text-gray-500 mb-6 text-center md:text-start">
                        Anda dapat masuk menggunakan akun Roomify.com Anda untuk mengakses layanan kami.
                    </p>

                    {error && (
                        <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-sm text-center">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email :
                            </label>
                            <input
                                type="email"
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
                                placeholder="Masukkan email anda"
                                required
                            />
                        </div>

                        <Button label={loading ? 'Memproses...' : 'Lanjutkan dengan email'} className="w-full" color="orange"></Button>
                    </form>

                    <div className='text-xs text-center mt-5'>Dengan masuk atau membuat akun, Anda menyetujui <Link href="#" className='text-orange-500 hover:text-orange-600'>Syarat & Ketentuan</Link> serta <Link href="#" className='text-orange-500 hover:text-orange-600'>Pernyataan Privasi</Link> kami.</div>

                    <p className="text-xs text-center text-gray-400 mt-3">
                        © 2025 Roomify
                    </p>
                </div>
            </div>
        </div>
    )
}
