<div x-cloak
     x-data="{ open: false, clicked: false }"
     @mouseover="open = true"
     @mouseover.outside="open = false; clicked = false"
        {{ $attributes->merge($getExtraAttributes())->class([
            'px-4 py-3 filament-tables-text-column flex items-center gap-2',
            'text-primary-600 transition hover:underline hover:text-primary-500 focus:underline focus:text-primary-500' => $getAction() || $getUrl(),
            'whitespace-normal' => $canWrap(),
        ]) }}
>
    {{ $getFormattedState() }}
    @if($getFormattedState())
        <button :class="open || clicked ? 'opacity-100' : 'opacity-0'" class="transition duration-500 rounded border border-gray-400 dark:border-gray-600 "
                @click.prevent="$clipboard('{{$getFormattedState()}}');clicked = true;">
            <x-heroicon-o-duplicate x-show="!clicked " class="w-5 h-5 text-gray-400 dark:text-gray-400"/>
            <x-heroicon-o-check x-show="clicked && open" class="w-5 h-5 text-success-500"
                                x-tooltip="{
                                    content: '{{ __('Copied!') }}',
                                    placement: 'right',
                                    onHidden: () => { clicked = false ;}
                                }"/>
        </button>
    @endif
</div>
