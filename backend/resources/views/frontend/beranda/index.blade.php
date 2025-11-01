<ul class="nav">
    @foreach ($menu->menuItems as $item)
        @if ($item->children && count($item->children))
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="{{ $item->url }}" id="dropdown{{ $item->id }}"
                    role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {{ $item->title }}
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdown{{ $item->id }}">
                    @foreach ($item->children as $child)
                        <li>
                            <a class="dropdown-item" href="{{ $child->url }}">{{ $child->title }}</a>
                        </li>
                    @endforeach
                </ul>
            </li>
        @else
            <li class="nav-item">
                <a class="nav-link" href="{{ $item->url }}">{{ $item->title }}</a>
            </li>
        @endif
    @endforeach
</ul>

<!-- Tambahkan di dalam <head> -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Tambahkan sebelum </body> -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
