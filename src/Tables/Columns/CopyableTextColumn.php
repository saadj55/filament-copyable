<?php

namespace Saadj55\FilamentCopyable\Tables\Columns;

use Closure;
use Filament\Tables\Columns\TextColumn;

class CopyableTextColumn extends TextColumn
{
    protected string | Closure | null $icon = 'heroicon-o-clipboard';
    protected bool $showOnHover = false;
    protected string $view = 'filament-copyable::columns.copyable-text-column';

    public function showOnHover(): static
    {
        $this->showOnHover = true;

        return $this;
    }

    /**
     * @return string
     */
    public function isShowOnHover(): string
    {
        return  $this->showOnHover;
    }
}
