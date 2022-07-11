<?php

namespace Saadj55\FilamentCopyable\Tables\Columns;

use Filament\Tables\Columns\TextColumn;

class CopyableTextColumn extends TextColumn{
    protected string $view = 'filament-copyable::columns.copyable-text-column';

}