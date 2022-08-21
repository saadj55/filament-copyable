<?php

namespace Saadj55\FilamentCopyable\Tables\Columns;

use Filament\Tables\Columns\TextColumn;

class CopyableTextColumn extends TextColumn
{
    protected string $icon = 'heroicon-o-clipboard';
    protected bool $showOnHover = false;
    protected string $view = 'filament-copyable::columns.copyable-text-column';

    public function showOnHover(): static
    {
        $this->showOnHover = true;

        return $this;
    }

    public function icon(string $icon): static
    {
        $this->icon = $icon;

        return $this;
    }

    /**
     * @return string
     */
    public function getIcon(): string
    {
        return $this->icon;
    }

    /**
     * @return string
     */
    public function isShowOnHover(): string
    {
        return  $this->showOnHover;
    }
}