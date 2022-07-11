<?php

namespace Saadj55\FilamentCopyable\Forms\Components;

use Closure;
use Filament\Forms\Components\TextInput;

class CopyableTextInput extends TextInput{

    protected string | Closure | null $suffixIcon = 'heroicon-o-clipboard';
    protected string $view = 'filament-copyable::forms.components.copyable-text-input';

}